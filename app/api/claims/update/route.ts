// api/claims/new
import dbConnect from "@/lib/db";
import Claim from "@/models/Claim";
import { NextResponse } from "next/server";

export async function PATCH(req: Request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status");
    const claimId = searchParams.get("claim");

    console.log("Status => ", status, "Claim => ", claimId);

    const updateData = { $set: { status: status } };

    const claim = await Claim.findById(claimId);

    if (!claim) {
      return NextResponse.json(
        {
          message: `Claim with ID "${claimId}" not found`,
        },
        { status: 404 }
      );
    }

    const updatedClaim = await claim.updateOne({ _id: claimId }, updateData);

    if (updatedClaim.modifiedCount <= 0) {
      return NextResponse.json(
        {
          message: `Failed to update claim with ID "${claimId}"`,
        },
        { status: 409 } // Conflict
      );
    }

    return NextResponse.json(
      {
        message: `Claim updated successfully`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("Zakanika => ", error);
    return NextResponse.json({
      status: false,
      message: "Error updating claim",
    });
  }
}
