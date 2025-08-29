const InputField = ({ icon, type, placeholder }) => {
  return (
    <div className="flex items-center border-0 rounded-full px-3 py-2 bg-white">
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