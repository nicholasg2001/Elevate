import { Toast } from 'flowbite-react';
import { useEffect } from 'react';
import { HiCheck, HiX } from 'react-icons/hi';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { toast } from '../../redux/feats/global/globalSlice';

const CustomToasts = () => {

  const state = useAppSelector((state) => state.global.toast.state);
  const message = useAppSelector((state) => state.global.toast.message);
  const dispatch = useAppDispatch();

  useEffect( () => {
    let timer;
    if(state){
      timer = setTimeout(() => {
        dispatch(toast({ state: false, message:""}));
      }, 5000);
    }
  })

  return (
    <>
      {state && (message.includes("successfully") ? (
        <div className="fixed bottom-4 left-4 z-50">
          <Toast>
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-200 text-green-500">
              <HiCheck className="h-5 w-5" />
            </div>
            <div className="ml-3 text-sm font-normal">{message}</div>
            <Toast.Toggle
              onDismiss={() => dispatch(toast({ state: false, message: "" }))}
              className="hover:bg-gray-100"
            />
          </Toast>
        </div>
      ) : (
        <div className="fixed bottom-4 left-4 z-50">
          <Toast>
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-200 text-red-500">
              <HiX className="h-5 w-5" />
            </div>
            <div className="ml-3 text-sm font-normal">{message}</div>
            <Toast.Toggle
              onDismiss={() => dispatch(toast({ state: false, message: "" }))}
            />
          </Toast>
        </div>
      ))}
    </>
  );
}

export default CustomToasts;