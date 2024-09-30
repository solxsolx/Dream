import { Reclaim } from "@reclaimprotocol/js-sdk";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    // const appId = process.env.RECLAIM_APP_ID;
    const appId = "0x116Fd7ac59bF713d886A4227725d083219e24818";
    if (!appId) {
      throw new Error("RECLAIM_APP_ID is not defined");
    }
    const reclaimClient = new Reclaim.ProofRequest(appId);

    // Parse the request URL to get the query parameters
    const url = new URL(req.url);
    const choice = url.searchParams.get("id");
    const userId = url.searchParams.get("userId");
    // We will select the provider by passing in the array index in the query parameter ie. the array index such as 0 or 1
    const providerIds: string[] = [
      "6d3f6753-7ee6-49ee-a545-62f1b1822ae5",
      "e83f3b89-cefa-4f63-bbed-deb0c94f7986",
    ];

    // Ensure the choice is a valid index
    if (
      choice === null ||
      isNaN(Number(choice)) ||
      Number(choice) < 0 ||
      Number(choice) >= providerIds.length
    ) {
      throw new Error("Invalid provider choice");
    }

    const providerId = providerIds[Number(choice)];

    // const APP_SECRET = process.env.RECLAIM_APP_SECRET;
    const APP_SECRET =
      "0x8bad51c97135e205f48fb91a596bf9a24406de08a9dcae9b47e7dfe96345e171";
    if (!APP_SECRET) {
      throw new Error("RECLAIM_APP_SECRET is not defined");
    }

    // Add context to proof for preventing proof reuse and duplication
    await reclaimClient.addContext(
      `user's address` /* User's blockchain address*/,
      `for userID: ${userId} on ${Date(Date.now())}`
    );

    //you specify the provider ids while creating the app
    //in the frontend we want to choose from the list of given providers
    const sessionData = await reclaimClient.buildProofRequest(
      "f9f383fd-32d9-4c54-942f-5e9fda349762",
      true,
      "V2Linking"
    );
    //add signature before proof gen to prevent phishing
    reclaimClient.setSignature(
      await reclaimClient.generateSignature(APP_SECRET)
    );

    const { requestUrl, statusUrl } =
      await reclaimClient.createVerificationRequest();
    return NextResponse.json({ requestUrl, statusUrl }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({
      status: 500,
      error: "Failed to generate signature",
    });
  }
}
