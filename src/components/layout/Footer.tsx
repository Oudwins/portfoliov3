export default () => {
  return (
    <footer className="py-5">
      <div className="custom-screen">
        <div className="mt-10 py-8 border-t border-gray-800 items-center justify-between sm:flex sm:w-2/3 mx-auto"></div>
        <p className="text-gray-400 text-center">
          © {new Date().getFullYear()} Tristan M. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
