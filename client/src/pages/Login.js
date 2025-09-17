function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form>
          <input type="email" placeholder="email" className="border p-2 mb-4 w-full" />
       </form>
      </div>
    </div>
  );
}

export default Login;