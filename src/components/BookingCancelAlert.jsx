"use client";

import { authClient } from "@/lib/auth-client";
import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";

export function BookingCancelAlert({ bookingId }) {

    const handleCancelBooking = async () => {

      const {data:tokenData} = await authClient.token()

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${bookingId}`, {
            method: "DELETE",
            headers: {
                'content-type': "application/json",
                authorization: `Bearer ${tokenData?.token}`
            }
        })

        const data = await res.json();
        console.log(data);

        window.location.reload();
    }


  return (
    <AlertDialog>
      
      <AlertDialog.Trigger>
        <button className="rounded-none border border-red-500 text-red-500 px-3 py-1 flex items-center gap-2">
          <TrashBin />
          Cancel
        </button>
      </AlertDialog.Trigger>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            
            <AlertDialog.CloseTrigger />

            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete project permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body>
              <p>
                This will permanently delete
                <strong> My Awesome Project</strong>.
              </p>
            </AlertDialog.Body>

            <AlertDialog.Footer>
              <Button slot="close" variant="bordered">
                Cancel
              </Button>

              <Button
              onClick={handleCancelBooking}
               slot="close" color="danger">
                Delete
              </Button>
            </AlertDialog.Footer>

          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}