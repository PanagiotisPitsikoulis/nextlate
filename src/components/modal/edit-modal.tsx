"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Textarea,
} from "@nextui-org/react";
import { toast } from "sonner";

export default function EditModal({
  children,
  text,
  onSave,
  id,
}: {
  children: React.ReactNode;
  text: string;
  onSave: (id: number, value: string) => Promise<any>;
  id: number;
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [value, setValue] = useState(text);

  const handleSave = async () => {
    if (text !== value) {
      try {
        await onSave(id, value);
        toast.success("Η ολοκλήρωση ενημερώθηκε με επιτυχία!");
      } catch (error) {
        toast.error("Σφάλμα στην ενημέρωση της ολοκλήρωσης.");
      }
    }
    onOpenChange();
  };

  return (
    <>
      <div onClick={onOpen}>{children}</div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Επεξεργασία Κειμένου
              </ModalHeader>
              <ModalBody>
                <Textarea
                  label="Κείμενο"
                  value={value}
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                />
              </ModalBody>
              <ModalFooter>
                <Button variant="light" onPress={onClose}>
                  Ακύρωση
                </Button>
                <Button color="primary" onPress={handleSave}>
                  Αποθήκευση
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
