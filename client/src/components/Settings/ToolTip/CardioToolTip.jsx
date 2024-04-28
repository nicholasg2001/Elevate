const CardioToolTip = ({ requirement }) => {

  return (
    <div className="flex justify-center">
      <div className="font-bold text-lg">
        Ran a total of {requirement} miles!
      </div>
    </div>
  )
}

export default CardioToolTip;