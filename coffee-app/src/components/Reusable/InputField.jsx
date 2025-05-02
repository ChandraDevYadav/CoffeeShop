const InputField = ({ label, ...props }) => (
    <div className="mb-4">
        <label className="block text-sm font-medium mb-2">{label}</label>
        <input
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            {...props}
        />
    </div>
);

export default InputField;
