import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await auth();

  if (!session?.user?.email) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
    include: {
      patientProfile: true,
      doctorProfile: true,
      labProfile: true,
    },
  });

  return NextResponse.json(user);
}

export async function PUT(request: Request) {
  const session = await auth();

  if (!session?.user?.email) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const body = await request.json();

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (!user) {
    return NextResponse.json(
      { error: "User not found" },
      { status: 404 }
    );
  }

  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      name: body.name,

      image: body.image,

      emailNotifications:
        body.emailNotifications ?? user.emailNotifications,

      screeningNotifications:
        body.screeningNotifications ??
        user.screeningNotifications,

      marketingNotifications:
        body.marketingNotifications ??
        user.marketingNotifications,
    },
  });

  if (user.role === "PATIENT") {
    await prisma.patientProfile.upsert({
      where: {
        userId: user.id,
      },
      update: {
        phone: body.phone,
        gender: body.gender,
        dateOfBirth: body.dateOfBirth
          ? new Date(body.dateOfBirth)
          : undefined,
      },
      create: {
        userId: user.id,
        phone: body.phone,
        gender: body.gender,
        dateOfBirth: body.dateOfBirth
          ? new Date(body.dateOfBirth)
          : undefined,
      },
    });
  }

  if (user.role === "DOCTOR") {
    await prisma.doctorProfile.upsert({
      where: {
        userId: user.id,
      },
      update: {
        hospital: body.hospital,
        specialization: body.specialization,
        licenseNumber: body.licenseNumber,
      },
      create: {
        userId: user.id,
        hospital: body.hospital,
        specialization: body.specialization,
        licenseNumber: body.licenseNumber,
      },
    });
  }

  if (user.role === "LAB") {
    await prisma.laboratoryProfile.upsert({
      where: {
        userId: user.id,
      },
      update: {
        name: body.labName,
        location: body.location,
        contact: body.contact,
      },
      create: {
        userId: user.id,
        name: body.labName,
        location: body.location,
        contact: body.contact,
      },
    });
  }

  const updatedUser = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
    include: {
      patientProfile: true,
      doctorProfile: true,
      labProfile: true,
    },
  });

  return NextResponse.json({
    success: true,
    message: "Profile updated successfully",
    user: updatedUser,
  });
}