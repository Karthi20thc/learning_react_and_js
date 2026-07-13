````markdown
# Common Git & SSH Short Flags Cheat Sheet

## Git Push

### `-u` or `--set-upstream`

```bash
git push -u origin main
```

**Meaning:**

```text
-u = Set upstream branch
```

After running once:

```bash
git push
git pull
```

will automatically use the configured remote branch.

---

## Git Commit

### `-m`

```bash
git commit -m "Initial commit"
```

**Meaning:**

```text
-m = Message
```

Adds a commit message directly from the command line.

---

### `-a`

```bash
git commit -am "Updated code"
```

**Meaning:**

```text
-a = Automatically stage modified files
```

Stages tracked files before committing.

---

## Git Checkout / Switch

### `-b`

```bash
git checkout -b feature/login
```

or

```bash
git switch -c feature/login
```

**Meaning:**

```text
-b = Create and switch to a branch
-c = Create and switch to a branch
```

---

## Git Branch

### `-d`

```bash
git branch -d feature/login
```

**Meaning:**

```text
-d = Delete branch
```

Deletes a merged branch.

---

### `-D`

```bash
git branch -D feature/login
```

**Meaning:**

```text
-D = Force delete branch
```

Deletes a branch even if it isn't merged.

---

## Git Log

### `--oneline`

```bash
git log --oneline
```

**Meaning:**

```text
Display one commit per line
```

---

## Git Remote

### `-v`

```bash
git remote -v
```

**Meaning:**

```text
-v = Verbose
```

Displays fetch and push URLs.

---

## Git Clean

### `-f`

```bash
git clean -f
```

**Meaning:**

```text
-f = Force
```

Required to actually delete files.

---

### `-d`

```bash
git clean -fd
```

**Meaning:**

```text
-d = Directories
```

Also deletes untracked folders.

---

## Git Stash

### `-u`

```bash
git stash -u
```

**Meaning:**

```text
-u = Include untracked files
```

---

## Git Reset

### `--soft`

```bash
git reset --soft HEAD~1
```

**Meaning:**

```text
Remove commit
Keep staged changes
```

---

### `--hard`

```bash
git reset --hard HEAD~1
```

**Meaning:**

```text
Remove commit
Remove all changes
```

⚠️ Use carefully.

---

## Git Restore

### `--staged`

```bash
git restore --staged file.js
```

**Meaning:**

```text
Remove file from staging area
```

---

# SSH Flags

## `-T`

```bash
ssh -T git@github.com
```

**Meaning:**

```text
-T = Disable pseudo-terminal allocation
```

Commonly used to test GitHub SSH authentication.

---

## `-i`

```bash
ssh -i ~/.ssh/id_rsa git@github.com
```

**Meaning:**

```text
-i = Identity file
```

Specifies which SSH private key to use.

---

## `-v`

```bash
ssh -v git@github.com
```

**Meaning:**

```text
-v = Verbose output
```

Displays SSH connection details.

---

## `-vv`

```bash
ssh -vv git@github.com
```

**Meaning:**

```text
More verbose debugging output
```

---

## `-vvv`

```bash
ssh -vvv git@github.com
```

**Meaning:**

```text
Maximum SSH debug output
```

---

# Most Frequently Used Flags

```text
-m      Message
-u      Set upstream / Include untracked files
-a      Auto-stage tracked files
-b      Create branch
-c      Create branch (switch)
-d      Delete branch
-D      Force delete branch
-v      Verbose
-f      Force
-T      Disable pseudo terminal (SSH)
-i      Identity/private key (SSH)
--soft  Keep changes after reset
--hard  Remove changes after reset
```

# Interview Question

## What does `git push -u origin main` mean?

```text
git push  -> Push local commits
-u        -> Set upstream branch
origin    -> Remote repository
main      -> Branch name
```

After running it once:

```bash
git push
git pull
```

will automatically track the `main` branch on `origin`.
````
