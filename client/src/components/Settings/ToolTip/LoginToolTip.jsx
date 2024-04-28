const LoginToolTip = ({ requirement }) => {

  return (
    <div className="flex justify-center">
      <div className="font-bold text-lg">
       Use Elevate for {requirement} in a row!
      </div>
    </div>
  )
}

export default LoginToolTip;