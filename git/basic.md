# Git Commands Cheat Sheet

## 1. Check Git Version

```bash
git --version
```

Displays the installed Git version.

---

## 2. Configure Git Username

```bash
git config --global user.name "Karthik Mani"
```

Sets your Git username globally.

---

## 3. Configure Git Email

```bash
git config --global user.email "your-email@example.com"
```

Sets your Git email globally.

---

## 4. View Git Configuration

```bash
git config --global --list
```

Shows all global Git configurations.

---

## 5. Clone a Repository

```bash
git clone https://github.com/user/repository.git
```

Downloads a repository from GitHub.

---

## 6. Check Repository Status

```bash
git status
```

Shows:

- Modified files
- New files
- Staged files
- Untracked files

---

## 7. Add a Specific File

```bash
git add fileName.js
```

Stages a specific file.

---

## 8. Add All Files

```bash
git add .
```

Stages all changes.

---

## 9. Commit Changes

```bash
git commit -m "Added login feature"
```

Creates a commit with a message.

---

## 10. View Commit History

```bash
git log
```

Shows detailed commit history.

Short version:

```bash
git log --oneline
```

---

## 11. Push Changes

```bash
git push
```

Pushes local commits to remote repository.

Specific branch:

```bash
git push origin main
```

---

## 12. Pull Latest Changes

```bash
git pull
```

Fetches and merges remote changes.

---

## 13. Fetch Changes Only

```bash
git fetch
```

Downloads changes without merging.

---

## 14. View Branches

```bash
git branch
```

Shows all local branches.

---

## 15. Create a New Branch

```bash
git branch feature/login
```

Creates a new branch.

---

## 16. Switch Branch

```bash
git switch feature/login
```

or

```bash
git checkout feature/login
```

Moves to the specified branch.

---

## 17. Create and Switch Branch

```bash
git switch -c feature/login
```

or

```bash
git checkout -b feature/login
```

Creates and switches to a new branch.

---

## 18. Merge a Branch

```bash
git merge feature/login
```

Merges the specified branch into the current branch.

---

## 19. Delete a Branch

```bash
git branch -d feature/login
```

Deletes a local branch.

---

## 20. View Remote Repositories

```bash
git remote -v
```

Shows fetch and push URLs.

---

## 21. Change Remote URL

```bash
git remote set-url origin https://github.com/user/repository.git
```

Updates the remote repository URL.

---

## 22. Compare Changes

```bash
git diff
```

Shows unstaged changes.

Compare staged files:

```bash
git diff --staged
```

---

## 23. Undo Local Changes

```bash
git restore file.txt
```

Restores file to last committed state.

---

## 24. Remove File from Staging Area

```bash
git restore --staged file.txt
```

Unstages a file.

---

## 25. Reset Last Commit (Keep Changes)

```bash
git reset --soft HEAD~1
```

Removes the last commit while preserving changes.

---

## 26. Reset Last Commit (Remove Changes)

```bash
git reset --hard HEAD~1
```

Removes the last commit and changes completely.

> ⚠️ Use carefully.

---

## 27. Stash Changes

```bash
git stash
```

Temporarily saves uncommitted changes.

---

## 28. View Stashed Changes

```bash
git stash list
```

Displays all stashes.

---

## 29. Restore Stashed Changes

```bash
git stash pop
```

Applies and removes the latest stash.

---

## 30. View Current Branch Tracking

```bash
git branch -vv
```

Shows local branches and their remote tracking branches.

---

## 31. Rename Current Branch

```bash
git branch -m new-branch-name
```

Renames the current branch.

---

## 32. Delete Remote Branch

```bash
git push origin --delete branch-name
```

Deletes a branch from the remote repository.

---

## 33. View Remote Branches

```bash
git branch -r
```

Shows all remote branches.

---

## 34. View Local and Remote Branches

```bash
git branch -a
```

Displays all branches.

---

## 35. Show Current Commit

```bash
git show
```

Displays details about the latest commit.

---

## 36. Revert a Commit

```bash
git revert COMMIT_ID
```

Creates a new commit that reverses a previous commit.

---

## 37. Cherry Pick a Commit

```bash
git cherry-pick COMMIT_ID
```

Applies a specific commit to the current branch.

---

## 38. Check Who Changed a Line

```bash
git blame fileName.js
```

Shows author details for each line.

---

## 39. Search Commit Messages

```bash
git log --grep="login"
```

Searches commits by message.

---

## 40. Clean Untracked Files

```bash
git clean -fd
```

Removes untracked files and folders.

> ⚠️ Use carefully.

---

# Most Common Daily Workflow

```bash
git pull
git status
git add .
git commit -m "Implemented new feature"
git push
```

---

# Important Interview Questions

## Difference Between `git fetch` and `git pull`

### git fetch

```bash
git fetch
```

- Downloads changes from remote.
- Does not merge changes.

### git pull

```bash
git pull
```

- Downloads changes.
- Automatically merges changes.

---

## Difference Between `git merge` and `git rebase`

### Merge

```bash
git merge feature-branch
```

- Preserves complete history.
- Creates a merge commit.

### Rebase

```bash
git rebase main
```

- Creates a cleaner history.
- Rewrites commit history.

---

## Top 10 Git Commands Every Developer Uses

```bash
git status
git add .
git commit -m "message"
git push
git pull
git fetch
git log --oneline
git branch
git switch branch-name
git stash
```

---

# Git Branch Workflow Example

```bash
# Create a new branch
git switch -c feature/login

# Check status
git status

# Add changes
git add .

# Commit changes
git commit -m "Added login page"

# Push branch
git push origin feature/login

# Switch to main
git switch main

# Pull latest changes
git pull

# Merge feature branch
git merge feature/login
```

---

# Quick Reference

```bash
git status                    # Check status
git add .                     # Stage all files
git commit -m "message"       # Commit changes
git push                      # Push changes
git pull                      # Pull latest changes
git fetch                     # Fetch changes
git branch                    # List branches
git switch branch-name        # Switch branch
git merge branch-name         # Merge branch
git stash                     # Stash changes
git stash pop                 # Restore stash
git log --oneline             # View commit history
git remote -v                 # View remote URLs
git diff                      # View changes
```