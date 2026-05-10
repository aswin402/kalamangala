import { useEffect, useRef, useState } from 'react';
import { X, CheckCircle2, AlertTriangle, AlertCircle, Info } from 'lucide-react';
import { useToastStore, type Toast, type ToastType } from '@/store/useToastStore';

/* ── Icon + color mapping per toast type ── */
const TOAST_CONFIG: Record<
  ToastType,
  {
    icon: typeof CheckCircle2;
    bgClass: string;
    borderClass: string;
    iconClass: string;
    progressClass: string;
  }
> = {
  success: {
    icon: CheckCircle2,
    bgClass: 'bg-[#f0fdf4]',
    borderClass: 'border-green-300',
    iconClass: 'text-green-600',
    progressClass: 'bg-green-500',
  },
  error: {
    icon: AlertCircle,
    bgClass: 'bg-[#fef2f2]',
    borderClass: 'border-red-300',
    iconClass: 'text-red-600',
    progressClass: 'bg-red-500',
  },
  warning: {
    icon: AlertTriangle,
    bgClass: 'bg-[#fffbeb]',
    borderClass: 'border-yellow-300',
    iconClass: 'text-yellow-600',
    progressClass: 'bg-yellow-500',
  },
  info: {
    icon: Info,
    bgClass: 'bg-[#eff6ff]',
    borderClass: 'border-blue-300',
    iconClass: 'text-blue-600',
    progressClass: 'bg-blue-500',
  },
};

/* ── Individual toast item with enter/exit animation ── */
function ToastItem({ toast: t, onDismiss }: { toast: Toast; onDismiss: (id: string) => void }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const config = TOAST_CONFIG[t.type];
  const Icon = config.icon;
  const duration = t.duration ?? (t.type === 'error' ? 6000 : 4000);

  useEffect(() => {
    // Trigger enter animation after mount
    const enterTimer = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(enterTimer);
  }, []);

  // Auto-exit animation before removal
  useEffect(() => {
    if (duration > 0) {
      timerRef.current = setTimeout(() => {
        setIsExiting(true);
        setTimeout(() => onDismiss(t.id), 350);
      }, duration - 350);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [duration, t.id, onDismiss]);

  const handleDismiss = () => {
    setIsExiting(true);
    setTimeout(() => onDismiss(t.id), 350);
  };

  return (
    <div
      className={`
        relative overflow-hidden rounded-xl border shadow-lg backdrop-blur-sm
        transition-all duration-350 ease-out
        ${config.bgClass} ${config.borderClass}
        ${isVisible && !isExiting
          ? 'translate-x-0 opacity-100 scale-100'
          : 'translate-x-[120%] opacity-0 scale-95'
        }
      `}
      style={{
        minWidth: '320px',
        maxWidth: '420px',
        transitionDuration: '350ms',
      }}
      role="alert"
    >
      <div className="flex items-start gap-3 px-4 py-3.5">
        <div className={`mt-0.5 flex-shrink-0 ${config.iconClass}`}>
          <Icon className="h-5 w-5" strokeWidth={2.2} />
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-gray-900 leading-5">
            {t.title}
          </p>
          {t.message && (
            <p className="mt-1 text-xs text-gray-600 leading-4 line-clamp-3">
              {t.message}
            </p>
          )}
        </div>

        <button
          type="button"
          onClick={handleDismiss}
          className="flex-shrink-0 p-1 rounded-md text-gray-400 hover:text-gray-600 hover:bg-black/5 transition-colors"
        >
          <X className="h-3.5 w-3.5" strokeWidth={2.5} />
        </button>
      </div>

      {/* Progress bar */}
      {duration > 0 && (
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-black/5">
          <div
            className={`h-full ${config.progressClass} rounded-full`}
            style={{
              animation: `toast-progress ${duration}ms linear forwards`,
            }}
          />
        </div>
      )}
    </div>
  );
}

/* ── Toaster container — renders all active toasts ── */
export function Toaster() {
  const toasts = useToastStore((s) => s.toasts);
  const removeToast = useToastStore((s) => s.removeToast);

  if (toasts.length === 0) return null;

  return (
    <div
      className="fixed top-6 right-6 z-[99999] flex flex-col gap-3 pointer-events-none"
      aria-live="polite"
    >
      {toasts.map((t) => (
        <div key={t.id} className="pointer-events-auto">
          <ToastItem toast={t} onDismiss={removeToast} />
        </div>
      ))}
    </div>
  );
}
