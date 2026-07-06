
### Starter Cheat Sheet

Set up your identity with Git
`git config --global user.name "YOUR_NAME_HERE`
`git config --global user.email "YOUR_EMAIL@MAIL.COM`

Initialize repository
`git init .` or just plain `git init`

Make your first commit
`git add .`
`git status` to check the staged files
`git commit -m "Initial commit"` for your first commit

Add remote repository (we just call it "remote")
`git remote add origin https://github.com/user/repository.git` where
- `origin` is the name of your remote
- and `https://github.com/user/repository.git` is the URL of your remote

Push to the repository
`git branch -M main`
- Sets the main/primary branch of Git to `main`
If your repository is still empty
`git push origin main --force`

If your repository is not empty (like working with other people for example)
`git pull origin main`
- You pull the changes from GitHub to your local copy
`git push origin main`
- You then push what you've worked on to GitHub for others to see

