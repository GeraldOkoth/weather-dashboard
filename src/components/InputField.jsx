const InputField = ({ icon, type, placeholder }) => {
  return (
    <div className="flex items-center border rounded-full px-3 py-2 bg-gray-100">
      <span className="material-icons text-gray-500">{icon}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="flex-1 bg-transparent outline-none ml-2"
      />
    </div>
  );
}

export default InputField