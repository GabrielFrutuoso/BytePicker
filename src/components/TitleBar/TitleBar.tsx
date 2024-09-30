import { X, Minimize2, PictureInPicture2 } from 'lucide-react'
import { appWindow } from '@tauri-apps/api/window'

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
    <div data-tauri-drag-region className="flex justify-between items-center p-1 bg-secondary">
      <div className="text-sm font-semibold">Bytepicker</div>
      <div className="flex space-x-2">
        <button onClick={handleMinimize} className="focus:outline-none">
          <Minimize2 size={18} />
        </button>
        <button onClick={handleToggleMaximize} className="focus:outline-none">
          <PictureInPicture2 size={18} />
        </button>
        <button onClick={handleClose} className="focus:outline-none">
          <X size={18} />
        </button>
      </div>
    </div>
  )
}