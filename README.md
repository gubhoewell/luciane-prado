# Site — Luciane Prado (Harmonização Facial)

Site institucional em HTML + CSS + JS puro (`index.html`, `style.css`, `script.js`), pronto para publicar no GitHub Pages.

## Referências usadas na pesquisa
- [Dra. Mayara Lima](https://dramayaralimahof.com.br/) — Florianópolis
- [Dra. Fernanda Cristófoli](https://fernandacristofoli.com.br/) — Florianópolis

Padrão do nicho: hero com CTA de WhatsApp, seção "Sobre" com credenciais, grid de tratamentos, depoimentos reais, CTA final. Segui esse padrão com tom mais próximo do que a Lu escreveu no PDF (naturalidade, conexão com o paciente).

## Pendências antes de publicar

1. ~~Fotos reais~~ ✅ feito — `images/hero-luciane.jpg`, `images/procedimento.jpg`, `images/galeria-1.jpg` e `images/galeria-2.jpg` já são fotos reais da Lu (extraídas dos prints que você mandou no chat). Seção "Bastidores do consultório" criada com elas.

2. **Número de WhatsApp** — substitua `55SEUNUMEROAQUI` em `index.html` (aparece 4x: hero, seção parceria, footer, botão flutuante) pelo número real da Lu, formato `55DDDNUMERO` (ex: `5548999999999`).

3. **Endereço/cidade** — coloquei "Grande Florianópolis / SC" de forma genérica (conforme o PDF). Se ela já tiver endereço fixo de consultório, me passa que eu atualizo.

4. **Depoimentos** — usei 3 falas reais dos prints que você mandou (anonimizados como "Paciente"). Se quiser trocar para nome/iniciais reais, é só falar.

## Como publicar no GitHub Pages
```bash
cd /Users/gustavobeirohoewell/Documents/CaludeCode/projetos/luciane-prado
git init
git add .
git commit -m "Site Luciane Prado"
gh repo create luciane-prado --public --source=. --push
```
Depois ativar GitHub Pages nas configurações do repo (branch `main`, pasta raiz).
