# The Ark: setup

1. **Supabase project**: supabase.com -> New project (region: Sydney). Save the database password.
2. **Run the setup**: SQL Editor -> New query -> paste all of `schema.sql` -> Run. It should say "Success".
3. **Keys**: Project Settings -> API. Copy the *Project URL* and the *anon public* key into `config.js`.
   Never use the `service_role` key.
4. **Email sign-in**: Authentication -> Providers -> Email is on. While testing you can switch off "Confirm email".
5. **GitHub**: create a public repo, upload `index.html` and `config.js` (not needed: `schema.sql`, `README.md`).
   Settings -> Pages -> Deploy from branch `main` / root. Your site: `https://USERNAME.github.io/REPO/`.
6. **Redirect URL**: Supabase -> Authentication -> URL Configuration. Set *Site URL* to your GitHub Pages address
   and add it under *Redirect URLs* (needed for confirmation and password-reset emails).
7. **Be first**: open the site and create the first account. That account is the **owner**.
   Everyone after is a normal member. The owner makes admins from the member's "..." menu.

Notes
- Calls are peer-to-peer using a public STUN server. Strict networks or mobile data may need a TURN relay.
- Call set-up messages go over a shared Supabase channel (not the call media itself).
- Uploaded files are stored in a public bucket under hard-to-guess names.
- Free Supabase projects pause when idle; click "Restore" in the dashboard if the site stops responding.
