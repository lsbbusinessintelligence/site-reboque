# 🚀 Deploy Site Eletricista no Vercel

## ✅ Status Atual
- ✅ Projeto buildado com sucesso
- ✅ vercel.json criado
- ✅ .gitignore configurado
- ✅ Código commitado no Git local

---

## 📋 PASSO 1: Criar Repositório no GitHub

### Opção A: Via GitHub CLI (recomendado)
```powershell
cd C:\Users\Leandro\github\lsbintelligence\site-eletricista
gh repo create site-eletricista --public --source=. --remote=origin --push
```

### Opção B: Via Interface Web GitHub
1. Acesse: https://github.com/new
2. Nome do repositório: `site-eletricista`
3. Deixe público
4. NÃO inicialize com README
5. Clique em "Create repository"

6. No terminal, execute:
```powershell
cd C:\Users\Leandro\github\lsbintelligence\site-eletricista
git remote add origin https://github.com/SEU_USUARIO/site-eletricista.git
git branch -M main
git push -u origin main
```

---

## 📋 PASSO 2: Deploy no Vercel

### Via Vercel CLI (recomendado)

1. Instalar Vercel CLI (se ainda não instalou):
```powershell
npm install -g vercel
```

2. Fazer login:
```powershell
vercel login
```

3. Deploy:
```powershell
cd C:\Users\Leandro\github\lsbintelligence\site-eletricista
vercel --prod
```

4. Durante o processo, responda:
- **Set up and deploy?** → `Y`
- **Which scope?** → Selecione sua conta
- **Link to existing project?** → `N`
- **What's your project's name?** → `lsb-eletricista-site-modelo`
- **In which directory is your code located?** → `.` (ou Enter)
- O Vercel detectará automaticamente que é um projeto Vite

### Via Interface Web Vercel

1. Acesse: https://vercel.com/new
2. Clique em "Import Git Repository"
3. Selecione o repositório `site-eletricista`
4. Configure:
   - **Project Name:** `lsb-eletricista-site-modelo`
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Clique em "Deploy"

---

## 📋 PASSO 3: Configurar Domínio Customizado no Vercel

Após o deploy, o Vercel criará automaticamente um domínio como:
- `lsb-eletricista-site-modelo.vercel.app`

Se não for esse exato nome, você pode alterá-lo:

1. No dashboard do Vercel, vá em **Settings** → **Domains**
2. Em "Domains", adicione: `lsb-eletricista-site-modelo.vercel.app`
3. Salve

---

## 📋 PASSO 4: Configurar Rota no Site Principal

Para acessar em `https://www.lsbintelligence.com.br/eletricista`, você tem duas opções:

### Opção A: Rewrite no Vercel (Site Principal)

Se seu site principal está no Vercel, adicione no `vercel.json` dele:

```json
{
  "rewrites": [
    {
      "source": "/eletricista/:path*",
      "destination": "https://lsb-eletricista-site-modelo.vercel.app/:path*"
    }
  ]
}
```

### Opção B: Iframe ou Redirect

Se quiser apenas redirecionar, crie uma página no site principal:

**src/pages/Eletricista.tsx:**
```tsx
import { useEffect } from 'react';

export default function Eletricista() {
  useEffect(() => {
    window.location.href = 'https://lsb-eletricista-site-modelo.vercel.app';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>Redirecionando...</p>
    </div>
  );
}
```

### Opção C: DNS (Se você controla o domínio)

No painel de DNS do seu domínio (onde lsbintelligence.com.br está registrado):

1. Adicione um CNAME record:
   - **Nome:** `eletricista`
   - **Tipo:** CNAME
   - **Valor:** `cname.vercel-dns.com`

2. No Vercel, adicione o domínio customizado:
   - `eletricista.lsbintelligence.com.br`

---

## 🧪 PASSO 5: Teste

Após o deploy, teste os dois URLs:

1. **Vercel direto:**
   ```
   https://lsb-eletricista-site-modelo.vercel.app
   ```

2. **Via rota principal (após configurar):**
   ```
   https://www.lsbintelligence.com.br/eletricista
   ```

---

## 📝 Resumo dos Comandos Executados

```powershell
# 1. Criar vercel.json
# Arquivo criado em: site-eletricista/vercel.json

# 2. Criar .gitignore
# Arquivo criado em: site-eletricista/.gitignore

# 3. Build do projeto (teste)
cd C:\Users\Leandro\github\lsbintelligence\site-eletricista
npm run build
# ✅ Build successful: dist/ created

# 4. Inicializar repositório Git
git init
git add .
git commit -m "Add .gitignore and vercel.json for deployment"

# 5. Próximos comandos (executar manualmente):
# gh repo create site-eletricista --public --source=. --remote=origin --push
# vercel --prod
```

---

## 📂 Arquivos Criados/Modificados

### ✅ Novos Arquivos:
- `site-eletricista/.gitignore` - Ignora node_modules, dist, logs
- `site-eletricista/vercel.json` - Configuração de build do Vercel

### ✅ Estrutura Final:
```
site-eletricista/
├── .gitignore          ← NOVO
├── vercel.json         ← NOVO
├── package.json
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── index.html
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   ├── components/
│   │   ├── HeroSection.tsx (avatar do eletricista)
│   │   ├── ServicosSection.tsx
│   │   ├── BeneficiosSection.tsx
│   │   ├── CtaSection.tsx
│   │   ├── FloatingWhatsApp.tsx
│   │   └── Footer.tsx
│   └── pages/
│       └── Index.tsx
└── dist/ (gerado no build, não commitado)
```

---

## ⚙️ Configuração Vercel (vercel.json)

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "installCommand": "npm install",
  "devCommand": "npm run dev",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "SAMEORIGIN"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        }
      ]
    }
  ]
}
```

---

## 🎯 Próximos Passos

1. **Execute os comandos do PASSO 1** para criar o repositório no GitHub
2. **Execute os comandos do PASSO 2** para fazer deploy no Vercel
3. **Verifique o domínio** gerado pelo Vercel
4. **Configure a rota** no site principal (PASSO 4)
5. **Teste** os dois URLs (PASSO 5)

---

## 🔗 Links Úteis

- **Vercel Dashboard:** https://vercel.com/dashboard
- **Vercel Docs:** https://vercel.com/docs
- **GitHub:** https://github.com
- **Projeto Local:** `C:\Users\Leandro\github\lsbintelligence\site-eletricista`

---

## ✨ Funcionalidades Mantidas

✅ Botão WhatsApp flutuante (55 11 91469-3294)
✅ Tema elétrico (amarelo/dourado)
✅ Avatar do eletricista com caixa de diálogo
✅ Layout responsivo
✅ Animações Framer Motion
✅ SEO otimizado
✅ Performance otimizada com Vite

---

**Pronto para deploy!** 🚀

Execute os comandos dos passos 1 e 2 para publicar o site.
