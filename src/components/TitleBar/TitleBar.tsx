import { appWindow } from '@tauri-apps/api/window';
import { MdMinimize, MdFullscreen, MdClose } from 'react-icons/md';
import { Button } from '../ui/button';

export const TitleBar = () => {
  const handleClose = () => {
    try {
      appWindow.close();
    } catch (error) {
      console.error('Failed to close window:', error);
    }
  };

  const handleMinimize = () => {
    try {
      appWindow.minimize();
    } catch (error) {
      console.error('Failed to minimize window:', error);
    }
  };

  const handleToggleMaximize = () => {
    try {
      appWindow.isMaximized().then(isMaximized => {
        if (isMaximized) {
          appWindow.unmaximize();
        } else {
          appWindow.maximize();
        }
      });
    } catch (error) {
      console.error('Failed to toggle maximize window:', error);
    }
  };

  return (
    <div data-tauri-drag-region className="flex justify-between items-center bg-secondary">
      <div className="text-md font-semibold ml-2">Bytepicker</div>
      <div className="flex">
        <Button variant={"ghost"} onClick={handleMinimize} className="focus:outline-none">
          <MdMinimize size={18} />
        </Button>
        <Button variant={"ghost"} onClick={handleToggleMaximize} className="focus:outline-none">
          <MdFullscreen size={18} />
        </Button>
        <Button variant={"ghost"} onClick={handleClose} className="focus:outline-none hover:bg-destructive hover:text-background">
          <MdClose size={18} />
        </Button>
      </div>
    </div>
  )
}