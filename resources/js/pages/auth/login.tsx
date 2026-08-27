import { Head, useForm } from '@inertiajs/react';
import { ArrowRight, LoaderCircle, Lock, Mail } from 'lucide-react';
import { FormEventHandler } from 'react';


import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';

type LoginForm = {
    email: string;
    password: string;
    remember: boolean;
};

interface LoginProps {
    status?: string;
}

export default function Login({ status }: LoginProps) {
    const { data, setData, post, processing, errors, reset } = useForm<Required<LoginForm>>({
        email: '',
        password: '',
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    const handleQuickFill = (email: string) => {
        setData({
            email,
            password: 'password123',
            remember: true,
        });
    };

    return (
        <AuthLayout title="Autentikasi Akun" description="Masukkan kredensial pengguna Anda untuk mengakses sistem kontrol monitoring mesin">
            <Head title="Masuk" />

            <form className="flex flex-col gap-4" onSubmit={submit}>
                <div className="space-y-4">
                    <div className="space-y-1.5">
                        <Label htmlFor="email" className="text-xs font-medium text-foreground">Email</Label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
                            <Input
                                id="email"
                                type="email"
                                required
                                autoFocus
                                tabIndex={1}
                                autoComplete="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                placeholder="Email"
                                className="pl-9.5 h-10 bg-background border-input text-foreground placeholder:text-muted-foreground focus-visible:ring-ring rounded-md"
                            />
                        </div>
                        <InputError message={errors.email} />
                    </div>

                    <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="password" className="text-xs font-medium text-foreground">Kata Sandi</Label>
                            {route().has('password.request') && (
                                <TextLink href={route('password.request')} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                                    Lupa sandi?
                                </TextLink>
                            )}
                        </div>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
                            <Input
                                id="password"
                                type="password"
                                required
                                tabIndex={2}
                                autoComplete="current-password"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                placeholder="••••••••"
                                className="pl-9.5 h-10 bg-background border-input text-foreground placeholder:text-muted-foreground focus-visible:ring-ring rounded-md font-mono"
                            />
                        </div>
                        <InputError message={errors.password} />
                    </div>

                    <div className="flex items-center space-x-2 pt-1">
                        <Checkbox
                            id="remember"
                            name="remember"
                            checked={data.remember}
                            onCheckedChange={(checked) => setData('remember', checked === true)}
                            tabIndex={3}
                        />
                        <Label htmlFor="remember" className="text-xs text-muted-foreground cursor-pointer select-none">
                            Ingat sesi saya di perangkat ini
                        </Label>
                    </div>

                    <Button
                        type="submit"
                        className="mt-2 w-full h-10 font-semibold text-xs tracking-wider bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 hover:opacity-90 rounded-md shadow-xs transition-all cursor-pointer"
                        tabIndex={4}
                        disabled={processing}
                    >
                        {processing ? (
                            <LoaderCircle className="h-4 w-4 animate-spin mr-2" />
                        ) : (
                            <div className="flex items-center justify-center gap-2 font-mono uppercase">
                                <span>Masuk ke Sistem</span>
                                <ArrowRight className="size-3.5" />
                            </div>
                        )}
                    </Button>
                </div>

                <div className="text-center text-xs text-muted-foreground pt-3 border-t border-border">
                    Belum memiliki akun?{' '}
                    <TextLink href={route('register')} tabIndex={5} className="font-semibold text-foreground underline underline-offset-4">
                        Daftar sekarang
                    </TextLink>
                </div>
            </form>

            {status && (
                <div className="mt-4 p-3 rounded-md bg-muted border border-border text-center text-xs font-mono text-foreground">
                    {status}
                </div>
            )}
        </AuthLayout>
    );
}

