import { Toast } from 'flowbite-react';
import { HiCheck, HiX } from 'react-icons/hi';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { toast } from '../../redux/feats/global/globalSlice';

const CustomToasts = () => {

  const state = useAppSelector((state) => state.global.toast.state);
  const message = useAppSelector((state) => state.global.toast.message);
  const dispatch = useAppDispatch();
  
  return (
    <>
      {state && (message.includes("successfully") ? (
        <div className="space-y-4">
          <Toast>
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
              <HiCheck className="h-5 w-5" />
            </div>
            <div className="ml-3 text-sm font-normal">{message}</div>
            <Toast.Toggle onDismiss={() => dispatch(toast({state: false, message: ""}))} />
          </Toast>
        </div>
      ) : (
        <div className="space-y-4">
          <Toast>
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
              <HiX className="h-5 w-5" />
            </div>
            <div className="ml-3 text-sm font-normal">{message}</div>
            <Toast.Toggle onDismiss={() => dispatch(toast({state: false, message: ""}))} />
          </Toast>
        </div>
      ))}
    </>
  );
}

export default CustomToasts;