const Alert = ({ alert }) => {
  return (
    <div className={`${alert.error ? "bg-red-400 text-red-800" : "bg-green-400 text-green-800"} text-center p-3 rounded-xl font-bold`}>
      {alert.msg}
    </div>
  );
};

export default Alert;
