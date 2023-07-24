
import { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import app from "../../firebase/firebase.config";

const ResetPassword = () => {
    const [resetEmail, setResetEmail] = useState("");
    const [resetError, setResetError] = useState("");
    const [resetSuccess, setResetSuccess] = useState(false);

    const handleResetPassword = (event) => {
        event.preventDefault();
        const auth = getAuth(app);

        sendPasswordResetEmail(auth, resetEmail)
            .then(() => {
                setResetSuccess(true);
                setResetError("");
            })
            .catch((error) => {
                setResetError(error.message);
                setResetSuccess(false);
            });
    };

    return (
        <div className="card flex-shrink-0 w-full max-w-xl mx-auto shadow-2xl bg-base-100 my-12">
            <h1 className="text-center text-3xl font-bold mt-10">Reset Password</h1>
            <div className="card-body">
                <form onSubmit={handleResetPassword}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="text"
                            name="email"
                            value={resetEmail}
                            onChange={(e) => setResetEmail(e.target.value)}
                            placeholder="email"
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-outline btn-neutral">
                            Reset Password
                        </button>
                    </div>
                    {resetError && <p className="text-red-600">{resetError}</p>}
                    {resetSuccess && (
                        <p className="text-green-600">Password reset email sent!</p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;
