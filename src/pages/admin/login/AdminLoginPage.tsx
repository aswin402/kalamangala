import { type JSX, useState } from 'react';
import { Eye, EyeOff, Lock, Mail, Shield } from 'lucide-react';
import Button from '@/components/button';
import { useAdminStore } from '@/store/useAdminStore';
import { useNavigate } from 'react-router-dom';

interface LoginForm {
  email: string;
  password: string;
}

interface Errors {
  email?: string;
  password?: string;
}

export function AdminLoginPage(): JSX.Element {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<LoginForm>({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [rememberMe, setRememberMe] = useState(false);
  const [authError, setAuthError] = useState('');

  const { login, isLoading } = useAdminStore();
  const navigate = useNavigate();

  const validateForm = (): boolean => {
    const newErrors: Errors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');

    if (!validateForm()) return;

    const result = await login(formData.email, formData.password);

    if (result.success) {
      navigate('/admin-dashboard');
    } else {
      setAuthError(result.error || 'Invalid email or password');
    }
  };

  const handleInputChange = (field: keyof LoginForm, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    if (authError) {
      setAuthError('');
    }
  };

  return (
    <div className="admin-login min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center p-6 sm:p-8 lg:p-12">
        <div className="w-full max-w-lg">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-card border border-border shadow-lg mb-6">
              <Shield className="w-8 h-8 text-primary" strokeWidth={1.5} />
            </div>

            <h1 className="text-3xl font-bold text-foreground mb-2">
              Admin Portal
            </h1>
            <p className="text-muted-foreground text-sm">
              Sign in to manage your CMS
            </p>
          </div>

          <div className="bg-[#f2f1df] border border-border rounded-xl shadow-xl p-10 min-h-[520px] flex flex-col">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground"
                >
                  Email Address
                </label>
                <div className="relative">
                  <Mail
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                    strokeWidth={2}
                  />
                  <input
                    id="email"
                    type="email"
                    placeholder="admin@kalamangala.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`w-full pl-11 pr-4 py-3 bg-background border rounded-lg text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                      errors.email
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-border'
                    }`}
                    disabled={isLoading}
                  />
                </div>
                {errors.email && (
                  <p className="text-xs text-red-600 mt-1.5">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-foreground"
                >
                  Password
                </label>
                <div className="relative">
                  <Lock
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                    strokeWidth={2}
                  />
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) =>
                      handleInputChange('password', e.target.value)
                    }
                    className={`w-full pl-11 pr-11 py-3 bg-background border rounded-lg text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                      errors.password
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-border'
                    }`}
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors p-1"
                    tabIndex={-1}
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" strokeWidth={2} />
                    ) : (
                      <Eye className="w-4 h-4" strokeWidth={2} />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-xs text-red-600 mt-1.5">
                    {errors.password}
                  </p>
                )}
              </div>

              {authError && (
                <div className="rounded-lg bg-red-500/10 border border-red-500/20 px-4 py-3">
                  <p className="text-sm text-red-600">{authError}</p>
                </div>
              )}

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded border-border bg-background text-primary focus:ring-2 focus:ring-primary focus:ring-offset-0 cursor-pointer"
                  />
                  <span className="text-sm text-muted-foreground">
                    Remember me
                  </span>
                </label>
                <button
                  type="button"
                  className="text-sm text-primary hover:text-[#FF894D] font-medium transition-colors"
                >
                  Forgot password?
                </button>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full mt-6 rounded-2xl hover:bg-[#FF894D] hover:text-white"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="animate-spin h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Signing in...
                  </span>
                ) : (
                  'Sign In'
                )}
              </Button>
            </form>
          </div>

          <p className="text-center text-xs text-muted-foreground mt-8">
            Secured by Kalamangala CMS &bull; All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}
