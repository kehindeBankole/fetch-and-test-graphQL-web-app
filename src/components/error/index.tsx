function Error() {
  return (
    <div
      className="w-full h-screen grid place-items-center"
      data-test-id="error"
    >
      <span className="inline-block animate-pulse px-4 p-2 bg-black text-white text-sm font-bold">
        error fetching data , please reload the page
      </span>
    </div>
  );
}

export default Error;
