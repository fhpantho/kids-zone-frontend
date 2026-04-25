export default function SignupLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body space-y-4">

          {/* Title */}
          <div className="skeleton h-8 w-2/3 mx-auto"></div>
          <div className="skeleton h-4 w-1/2 mx-auto"></div>

          {/* Name */}
          <div>
            <div className="skeleton h-4 w-20 mb-2"></div>
            <div className="skeleton h-10 w-full"></div>
          </div>

          {/* Email */}
          <div>
            <div className="skeleton h-4 w-20 mb-2"></div>
            <div className="skeleton h-10 w-full"></div>
          </div>

          {/* Password */}
          <div>
            <div className="skeleton h-4 w-24 mb-2"></div>
            <div className="skeleton h-10 w-full"></div>
          </div>

          {/* Button */}
          <div className="skeleton h-10 w-full mt-2"></div>

          {/* Google Button */}
          <div className="skeleton h-10 w-full"></div>

          {/* Footer */}
          <div className="skeleton h-4 w-2/3 mx-auto"></div>
        </div>
      </div>
    </div>
  );
}