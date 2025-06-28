function Error({ message }) {
  return (
    <div className="mt-4 px-4 py-2 bg-red-100 text-red-700 border border-red-400 rounded w-full max-w-md text-center">
      ❌ {message}
    </div>
  );
}

export default Error;
