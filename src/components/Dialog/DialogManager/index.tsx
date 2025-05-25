import React, { useState } from 'react';
import { Dialog, DialogLine } from '../../../data/dialogs';

type DialogManagerProps = {
  dialogData: Dialog;
  startId?: string; // Defaults to the first dialog if not provided
  onDialogEnd?: () => void;
  children: (
    currentLine: DialogLine | null,
    handleNext: () => void,
    handleChoice: (nextId: string) => void
  ) => React.ReactNode;
};

export function DialogManager({ dialogData, startId, onDialogEnd, children } : DialogManagerProps) {
  const [currentId, setCurrentId] = useState<string | null>(
    startId || dialogData[0]?.id || null
  );

  const currentLine = dialogData.find((line) => line.id === currentId) || null;

  function handleNext() {
    if (currentLine?.nextId) {
      setCurrentId(currentLine.nextId);
    } else {
      setCurrentId(null);
      onDialogEnd?.();
    }
  };

  function handleChoice(nextId: string) {
    setCurrentId(nextId);
  };

  return (
    <>
      {children(currentLine, handleNext, handleChoice)}
    </>
  );
};
