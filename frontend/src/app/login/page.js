'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Input from '@/components/Input';
import Button from '@/components/Button';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export default function LoginPage() {
  const router = useRouter();
  const [esRegistro, setEsRegistro] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [foto, setFoto] = useState('');
  const [error, setError] = useState('');
  const [cargando, setCargando] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setCargando(true);

    try {
      const endpoint = esRegistro ? '/register' : '/login';
      const body = esRegistro
        ? { username, email, password, foto: foto || null }
        : { email, password };

      const res = await fetch(`${API_URL}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Ocurrió un error');
        return;
      }

      localStorage.setItem('usuario', JSON.stringify(data));
      router.push('/chats');
    } catch (err) {
      setError('No se pudo conectar con el servidor');
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8 w-full max-w-sm flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-center text-emerald-700">Pio Chat</h1>
        <h2 className="text-lg text-center text-gray-600">{esRegistro ? 'Crear cuenta' : 'Iniciar sesión'}</h2>

        {esRegistro && (
          <Input label="Nombre de usuario" value={username} onChange={(e) => setUsername(e.target.value)} required />
        )}

        <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <Input label="Contraseña" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        {esRegistro && (
          <Input label="Foto (URL, opcional)" value={foto} onChange={(e) => setFoto(e.target.value)} placeholder="https://..." />
        )}

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <Button type="submit" disabled={cargando}>
          {cargando ? 'Cargando...' : esRegistro ? 'Registrarme' : 'Ingresar'}
        </Button>

        <button type="button" onClick={() => setEsRegistro(!esRegistro)} className="text-sm text-emerald-700 hover:underline">
          {esRegistro ? '¿Ya tenés cuenta? Iniciar sesión' : '¿No tenés cuenta? Registrarte'}
        </button>
      </form>
    </div>
  );
}