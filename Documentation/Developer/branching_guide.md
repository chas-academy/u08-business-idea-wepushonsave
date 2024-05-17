# This is the guide on how to:

## - Create Issues

#### 1. [Update local main](#1-update-local-main)

#### 2. [Update Feature Branch](#2-update-feature-branch)

#### 3. [Create issue](#3-create-a-new-sub-branch--issue-branch-from-the-feature-branch)

## - Branch

#### 1. [Create new branch](#3-create-a-new-sub-branch--issue-branch-from-the-feature-branch)

#### 2. [First commit](#4-first-commit)

## - Commit / Push

#### 1. [Commit and push](#5-upkeep-and-maintenance)

## - Pull-request / merge

#### 1. [Merge](#7-pull-request)

---

Created | 2024-05-12

---

### 1. Update local `main`

1. Switch to `main` branch

```pwsh
git switch main
```

![](https://i.imgur.com/ZVa6bOf.png)

2. Fetch possible updates

```pwsh
git fetch
```

3. Pull the possible updates (Always fetch before pulling)

```pwsh
git pull
```

![](https://i.imgur.com/GmBUlq9.png)

---

### 2. Update the `feature` branch

1. Checkout `feature` branch

```pwsh
git checkout feature
```

![](https://i.imgur.com/oMZCQQd.png)

2. Fetch possible updates

```pwsh
git fetch
```

3. Pull the possible updates (Always fetch before pulling)

```pwsh
git pull
```

![](https://i.imgur.com/Hs32gZv.png)

4. Rebase

```pwsh
git rebase main
```

![](https://i.imgur.com/3qGVQip.png)

---

### 3. Create a new sub-branch / issue-branch from the `feature` branch

1. Create an issue in the [Backlog](https://github.com/orgs/chas-academy/projects/103/views/1)

![](https://i.imgur.com/FuBUwF3.png)

2. Add a self explanatory `title`, a detailed `description` and an `assignee` and click `Create`

3. Create the branch from the issue

   1. Select your issue
      ![](https://i.imgur.com/MZXjPho.png)

   2. Click `create a branch`

   ![](https://i.imgur.com/3Lxttzl.png)

   3. Select the `feature` branch you want to branch of and click `create`

      ![](https://i.imgur.com/RH4oiXw.png)

   4. Copy the git command and close the window

      ![](https://i.imgur.com/ruKRTOv.png)

```pwsh
git fetch origin
git checkout 39-pullguide-test
```

4. `checkout` your sub-branch from the `feature` branch using the command you copied like this;

```pwsh
git fetch origin
git checkout 39-pullguide-test
```

![](https://i.imgur.com/BXnp3TV.png)

**Pitfall:**
_If you did not select the correct feature branch to work from you can still branch off correctly, follow steps up till this point and run this command instead of `4. checkout your sub-branch....`_

```pwsh
git checkout -b feature/sub-branch-name feature
```

_or in this case..._

```pwsh
git checkout -b 35-search/39-pullguide-test 35-search
```

---

### 4. First commit

_Adding a first commit to set up a remote connection and notify your team_

1. Open `code` from your new sub-branch
   _If you are working on `frontend`, open from the `frontend` folder. The same goes for the `backend`_

```pwsh
 cd .\frontend\
 code .
```

![](https://i.imgur.com/BJmBAP6.png)

2. Add a `folder`, `file` or `comment` were you intend to work.

![](https://i.imgur.com/K2pS7sA.png)

3. `Commit` using `source control` or from the terminal with comment "Initial commit"

![](https://i.imgur.com/iYPbyEg.png)

4. Push and sync changes

![](https://i.imgur.com/MvfqzOQ.png)

![](https://i.imgur.com/yN56mwL.png)

5. Start working on your branch

---

### 5. Upkeep and maintenance

_An issue branch should be created the day it is planned to be finished, sometimes this is not possible. This is what you have to think about in these cases_

1. `fetch` and `pull`the feature branch often. Before starting your workday
2. `rebase` if updates have been made on the `feature` branch
3. `commit` your changes to mark small milestones in your issue workflow

### 6. Commit & Push

_You have finished the issue and want to merge it with the feature branch._

1. `switch` to the `feature` branch

```pwsh
git switch feature
```

2. `fetch` and `pull` any changes made

```pwsh
git fetch
git pull
```

3. `switch` to the `issue`/`sub-feature` branch

```pwsh
git switch 39-pullguide-test
```

4. `rebase`

```pwsh
git rebase feature
```

![](https://i.imgur.com/hz4Effg.png)

_any changes can be found in the `source control` tab on vscode_

![](https://i.imgur.com/5mEqSJ4.png)

5. Inspect `All changes` using `source controll` and correct if needed

![](https://i.imgur.com/DUHzCKA.png)

6. `Commit` and `Push` / `Sync Changes`

**OK**
![](https://i.imgur.com/oNKJZyp.png)

**Pull**
![](https://i.imgur.com/be1rYFN.png)

---

### 7. Pull request

_This is it, you have finished the issue and want to merge your progress_

1. Go to our [GitHub Repo](https://github.com/chas-academy/u08-business-idea-wepushonsave)
   _You should only see one `Compare & pull request`_
   ![](https://i.imgur.com/it1iQSE.png)

2. Create a pull request

![](https://i.imgur.com/Nb78Nma.png)

3. Select the `feature` branch you want to merge with

![](https://i.imgur.com/SjMN7dm.png)

4. Add a comment
   _adding `Fixes #39` makes issue #39 automatically move to the **Done** section in the kanban board and marks the issue as completed._

![](https://i.imgur.com/yNTN3BH.png)

5. Create pull request,

![](https://i.imgur.com/BGvIMbE.png)

6. Squash and merge

_Select `Squash and merge`_
![](https://i.imgur.com/Rwxbdk1.png)

![](https://i.imgur.com/U9dM6zx.png)
_All your commits on this branch are combined in to one commit_
![](https://i.imgur.com/bBFjYQ3.png)

7. Delete remote branch

![](https://i.imgur.com/WQT2sV4.png)

---

**Pitfall:**
**!!NEVER!! delete a feature branch**

![](https://i.imgur.com/QHfFzgq.png)

---

### 8. Always check

_After merging your local branch will **NOT** be up to date and you **MUST** pull the changes you just made_

![](https://i.imgur.com/e8DDtFm.png)

_Failing in doing this can result in detached heads of branches and members of the team.. Use `git blame` to find and help your team stay on track with our git flow_
