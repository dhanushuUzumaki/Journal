# Pull Requests

There are two fundamental components of the Pull Request process: one concrete
and technical, and one more process oriented. The concrete and technical
component involves the specific details of setting up your local environment
so that you can make the actual changes. This is where we will start.

* [Dependencies](#dependencies)
* [Setting up your local environment](#setting-up-your-local-environment)
  * [Step 1: Fork](#step-1-fork)
  * [Step 2: Branch](#step-2-branch)
* [The Process of Making Changes](#the-process-of-making-changes)
  * [Step 3: Code](#step-3-code)
  * [Step 4: Commit](#step-4-commit)
    * [Commit message guidelines](#commit-message-guidelines)
  * [Step 5: Rebase](#step-5-rebase)
  * [Step 6: Test](#step-6-test)
    * [Test Coverage](#test-coverage)
  * [Step 7: Push](#step-7-push)
  * [Step 8: Opening the Pull Request](#step-8-opening-the-pull-request)
  * [Step 9: Discuss and Update](#step-9-discuss-and-update)
    * [Approval and Request Changes Workflow](#approval-and-request-changes-workflow)
  * [Step 10: Landing](#step-10-landing)
* [Reviewing Pull Requests](#reviewing-pull-requests)
  * [Review a bit at a time](#review-a-bit-at-a-time)
  * [Be aware of the person behind the code](#be-aware-of-the-person-behind-the-code)
  * [Respect the minimum wait time for comments](#respect-the-minimum-wait-time-for-comments)
  * [Abandoned or Stalled Pull Requests](#abandoned-or-stalled-pull-requests)
  * [Approving a change](#approving-a-change)
  * [Performance is not everything](#performance-is-not-everything)
  * [Continuous Integration Testing](#continuous-integration-testing)

## Dependencies

Journal has three major dependencies.

* Docker
* Node
* Postgres SQL

## Setting up your local environment

To get started, you will need to have `git` installed locally. Depending on
your operating system, there are also a number of other dependencies required.
These are detailed in the [Building guide][].

Once you have `git` and are sure you have all of the necessary dependencies,
it's time to create a fork.

### Step 1: Fork

Fork the project [on GitHub](https://github.com/dhanushuUzumaki/Journal) and clone your fork
locally.

```text
$ git clone git@github.com:username/node.git
$ cd node
$ git remote add upstream https://github.com/dhanushuUzumaki/journal.git
$ git fetch upstream
```

It is recommended to configure `git` so that it knows who you are:

```text
$ git config user.name "J. Random User"
$ git config user.email "j.random.user@example.com"
```
Please make sure this local email is also added to your
[GitHub email list](https://github.com/settings/emails) so that your commits
will be properly associated with your account and you will be promoted
to Contributor once your first commit is landed.

### Step 2: Branch

As a best practice to keep your development environment as organized as
possible, create local branches to work within. These should also be created
directly off of the `master` branch.

```text
$ git checkout -b my-branch -t upstream/master
```

## The Process of Making Changes

### Step 3: Code

Make sure you respect all the lint rules. We suggest to use VSCode with eslint plugin to make your life easier.

If your code has lint errors, precommit hook will catch it and stop your commit.

Run `npm run lint --fix` to fix most common lint errors. 

### Step 4: Commit

It is a recommended best practice to keep your changes as logically grouped
as possible within individual commits. There is no limit to the number of
commits any single Pull Request may have, and many contributors find it easier
to review changes that are split across multiple commits.

```text
$ git add my/changed/files
$ git commit
```

Note that multiple commits often get squashed when they are landed (see the
notes about [commit squashing](#commit-squashing)).

#### Commit message guidelines

A good commit message should describe what changed and why.

1. The first line should:
   - contain a short description of the change (preferably 50 characters or less,
     and no more than 72 characters)
   - be entirely in lowercase with the exception of proper nouns, acronyms, and
   the words that refer to code, like function/variable names
   - be prefixed with the name of the changed subsystem and start with an
   imperative verb. Check the output of `git log --oneline files/you/changed` to
   find out what subsystems your changes touch.

   Examples:
   - `graphql: fix JWT parsing error`
   - `react: add header component and its styles`


2. Keep the second line blank.
3. Wrap all other lines at 72 columns (except for long URLs).

4. If your patch fixes an open issue, you can add a reference to it at the end
of the log. Use the `Fixes:` prefix and the full issue URL. For other references
use `Refs:`.

   Examples:
   - `Fixes: https://github.com/dhanushuUzumaki/node/issues/145`
   - `Refs: http://eslint.org/docs/rules/space-in-parens.html`
   - `Refs: https://github.com/nodejs/node/pull/3615`

5. If your commit introduces a breaking change (`semver-major`), it should
contain an explanation about the reason of the breaking change, which
situation would trigger the breaking change and what is the exact change.

Sample complete commit message:

```txt
subsystem: explain the commit in one line

Body of commit message is a few lines of text, explaining things
in more detail, possibly giving some background about the issue
being fixed, etc.

The body of the commit message can be several paragraphs, and
please do proper word-wrap and keep columns shorter than about
72 characters or so. That way, `git log` will show things
nicely even when it is indented.

Refs: http://eslint.org/docs/rules/space-in-parens.html
```

If you are new to contributing to Journal, please try to do your best at
conforming to these guidelines, but do not worry if you get something wrong.
One of the existing contributors will help get things situated and the
contributor landing the Pull Request will ensure that everything follows
the project guidelines.

See [core-validate-commit](https://github.com/evanlucas/core-validate-commit) -
A utility that ensures commits follow the commit formatting guidelines.

### Step 5: Rebase

As a best practice, once you have committed your changes, it is a good idea
to use `git rebase` (not `git merge`) to synchronize your work with the main
repository.

```text
$ git fetch upstream
$ git rebase upstream/master
```

This ensures that your working branch has the latest changes from `nodejs/node`
master.

### Step 6: Test

Will be updated once we add test cases 😎

#### Test Coverage

Will be filled once we add test cases 😎

### Step 7: Push

Once you are sure your commits are ready to go, with passing tests and linting,
begin the process of opening a Pull Request by pushing your working branch to
your fork on GitHub.

```text
$ git push origin my-branch
```

### Step 8: Opening the Pull Request

From within GitHub, opening a new Pull Request will present you with a template
that should be filled out:

```markdown
<!-- Journal Pull Request Template -->

<!-- IMPORTANT Please review https://github.com/dhanushuUzumaki/Journal/blob/master/CONTRIBUTING.md for detailed contributing guidelines -->
<!-- Make sure that your PR is not a duplicate -->

#### Pre-Submission Checklist
<!-- Go over all points below, and after creating the PR, tick all the checkboxes that apply. -->
<!-- All points should be verified, otherwise, read the CONTRIBUTING guidelines from above-->
<!-- If you're unsure about any of these, don't hesitate to ask. We're here to help! -->
- [ ] Your pull request targets the `develop` branch of freeCodeCamp.
- [ ] Branch starts with either `fix/` or `feature/` (e.g. `fix/signin-issue`)
- [ ] You have only one commit (if not, [squash](http://forum.freecodecamp.org/t/how-to-squash-multiple-commits-into-one-with-git/13231) them into one commit) (Optional).
- [ ] All new and existing tests pass the command `npm test`. Use `git commit --amend` to amend any fixes (Not needed until test cases are added).

#### Type of Change
<!-- What type of change does your code introduce? After creating the PR, tick the checkboxes that apply. -->
- [ ] Small bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds new functionality)
- [ ] Breaking change (fix or feature that would change existing functionality)

#### Checklist:
<!-- Go over all points below, and after creating the PR, tick the checkboxes that apply. -->
<!-- If you're unsure about any of these, don't hesitate to ask in the Contributors room linked above. We're here to help! -->
- [ ] Tested changes locally.
- [ ] Addressed currently open issue (replace XXXXX with an issue no in next line)

Closes #XXXXX

#### Description
<!-- Describe your changes in detail -->
```

Please try to do your best at filling out the details, but feel free to skip
parts if you're not sure what to put.

Once opened, Pull Requests are usually reviewed within a few days.

### Step 9: Discuss and update

You will probably get feedback or requests for changes to your Pull Request.
This is a big part of the submission process so don't be discouraged! Some
contributors may sign off on the Pull Request right away, others may have
more detailed comments or feedback. This is a necessary part of the process
in order to evaluate whether the changes are correct and necessary.

To make changes to an existing Pull Request, make the changes to your local
branch, add a new commit with those changes, and push those to your fork.
GitHub will automatically update the Pull Request.

```text
$ git add my/changed/files
$ git commit
$ git push origin my-branch
```

It is also frequently necessary to synchronize your Pull Request with other
changes that have landed in `master` by using `git rebase`:

```text
$ git fetch --all
$ git rebase origin/master
$ git push --force-with-lease origin my-branch
```

**Important:** The `git push --force-with-lease` command is one of the few ways
to delete history in `git`. Before you use it, make sure you understand the
risks. If in doubt, you can always ask for guidance in the Pull Request.

If you happen to make a mistake in any of your commits, do not worry. You can
amend the last commit (for example if you want to change the commit log).

```text
$ git add any/changed/files
$ git commit --amend
$ git push --force-with-lease origin my-branch
```

There are a number of more advanced mechanisms for managing commits using
`git rebase` that can be used, but are beyond the scope of this guide.

Feel free to post a comment in the Pull Request to ping reviewers if you are
awaiting an answer on something. If you encounter words or acronyms that
seem unfamiliar, refer to this
[glossary](https://sites.google.com/a/chromium.org/dev/glossary).

#### Approval and Request Changes Workflow

All Pull Requests require "sign off" in order to land. Whenever a contributor
reviews a Pull Request they may find specific details that they would like to
see changed or fixed. These may be as simple as fixing a typo, or may involve
substantive changes to the code you have written. While such requests are
intended to be helpful, they may come across as abrupt or unhelpful, especially
requests to change things that do not include concrete suggestions on *how* to
change them.

Try not to be discouraged. If you feel that a particular review is unfair,
say so, or contact one of the other contributors in the project and seek their
input. Often such comments are the result of the reviewer having only taken a
short amount of time to review and are not ill-intended. Such issues can often
be resolved with a bit of patience. That said, reviewers should be expected to
be helpful in their feedback, and feedback that is simply vague, dismissive and
unhelpful is likely safe to ignore.

### Step 10: Landing

In order to land, a Pull Request needs to be reviewed and [approved][] by
at least one Journal Collaborator and pass a
[CI (Continuous Integration) test run][] (Not required now, since CI is not set up yet.). After that, as long as there are no
objections from other contributors, the Pull Request can be merged. If you find
your Pull Request waiting longer than you expect, see the
[notes about the waiting time](#waiting-until-the-pull-request-gets-landed).

When a collaborator lands your Pull Request, they will post
a comment to the Pull Request page mentioning the commit(s) it
landed as. GitHub often shows the Pull Request as `Closed` at this
point, but don't worry. If you look at the branch you raised your
Pull Request against (probably `develop`), you should see a commit with
your name on it. Congratulations and thanks for your contribution!

## Reviewing Pull Requests

All Journal contributors who choose to review and provide feedback on Pull
Requests have a responsibility to both the project and the individual making the
contribution. Reviews and feedback must be helpful, insightful, and geared
towards improving the contribution as opposed to simply blocking it. If there
are reasons why you feel the PR should not land, explain what those are. Do not
expect to be able to block a Pull Request from advancing simply because you say
"No" without giving an explanation. Be open to having your mind changed. Be open
to working with the contributor to make the Pull Request better.

Reviews that are dismissive or disrespectful of the contributor or any other
reviewers are strictly counter to the [Code of Conduct][].

When reviewing a Pull Request, the primary goals are for the codebase to improve
and for the person submitting the request to succeed. Even if a Pull Request
does not land, the submitters should come away from the experience feeling like
their effort was not wasted or unappreciated. Every Pull Request from a new
contributor is an opportunity to grow the community.

### Review a bit at a time.

Do not overwhelm new contributors.

It is tempting to micro-optimize and make everything about relative performance,
perfect grammar, or exact style matches. Do not succumb to that temptation.

Focus first on the most significant aspects of the change:

1. Does this change make sense for Journal?
2. Does this change make Journal better, even if only incrementally?
3. Are there clear bugs or larger scale issues that need attending to?
4. Is the commit message readable and correct? If it contains a breaking change is it clear enough?

When changes are necessary, *request* them, do not *demand* them, and do not
assume that the submitter already knows how to add a test or run a benchmark.

Specific performance optimization techniques, coding styles and conventions
change over time. The first impression you give to a new contributor never does.

Nits (requests for small changes that are not essential) are fine, but try to
avoid stalling the Pull Request. Most nits can typically be fixed by the
Node.js Collaborator landing the Pull Request but they can also be an
opportunity for the contributor to learn a bit more about the project.

It is always good to clearly indicate nits when you comment: e.g.
`Nit: change foo() to bar(). But this is not blocking.`

If your comments were addressed but were not folded automatically after new
commits or if they proved to be mistaken, please, [hide them][hiding-a-comment]
with the appropriate reason to keep the conversation flow concise and relevant.

### Be aware of the person behind the code

Be aware that *how* you communicate requests and reviews in your feedback can
have a significant impact on the success of the Pull Request. Yes, we may land
a particular change that makes Node.js better, but the individual might just
not want to have anything to do with Node.js ever again. The goal is not just
having good code.

### Respect the minimum wait time for comments

There is a minimum waiting time which we try to respect for non-trivial
changes, so that people who may have important input in such a distributed
project are able to respond.

For non-trivial changes, Pull Requests must be left open for *at least* 48
hours during the week, and 72 hours on a weekend. In most cases, when the
PR is relatively small and focused on a narrow set of changes, these periods
provide more than enough time to adequately review. Sometimes changes take far
longer to review, or need more specialized review from subject matter experts.
When in doubt, do not rush.

Trivial changes, typically limited to small formatting changes or fixes to
documentation, may be landed within the minimum 48 hour window.

### Abandoned or Stalled Pull Requests

If a Pull Request appears to be abandoned or stalled, it is polite to first
check with the contributor to see if they intend to continue the work before
checking if they would mind if you took it over (especially if it just has
nits left). When doing so, it is courteous to give the original contributor
credit for the work they started (either by preserving their name and email
address in the commit log, or by using an `Author: ` meta-data tag in the
commit.

### Approving a change

Any Journal core Collaborator (any GitHub user with commit rights in the
`dhanushuUzumaki/Journal` repository) is authorized to approve any other contributor's
work. Collaborators are not permitted to approve their own Pull Requests.

Collaborators indicate that they have reviewed and approve of the changes in
a Pull Request either by using GitHub's Approval Workflow, which is preferred,
or by leaving an `LGTM` ("Looks Good To Me") comment.

When explicitly using the "Changes requested" component of the GitHub Approval
Workflow, show empathy. That is, do not be rude or abrupt with your feedback
and offer concrete suggestions for improvement, if possible. If you're not
sure *how* a particular change can be improved, say so.

Most importantly, after leaving such requests, it is courteous to make yourself
available later to check whether your comments have been addressed.

If you see that requested changes have been made, you can clear another
collaborator's `Changes requested` review.

Change requests that are vague, dismissive, or unconstructive may also be
dismissed if requests for greater clarification go unanswered within a
reasonable period of time.

If you do not believe that the Pull Request should land at all, use
`Changes requested` to indicate that you are considering some of your comments
to block the PR from landing. When doing so, explain *why* you believe the
Pull Request should not land along with an explanation of what may be an
acceptable alternative course, if any.

### Performance is not everything

If a particular Pull Request introduces a performance or functional
regression, rather than simply rejecting the Pull Request, take the time to
work *with* the contributor on improving the change. Offer feedback and
advice on what would make the Pull Request acceptable, and do not assume that
the contributor should already know how to do that. Be explicit in your
feedback.

### Continuous Integration Testing

Will be updated after adding CI. 😎

[approved]: #getting-approvals-for-your-pull-request
[Building guide]: ../../../BUILDING.md
[CI (Continuous Integration) test run]: #ci-testing
[Code of Conduct]: https://github.com/dhanushuUzumaki/Journal/blob/master/CODE_OF_CONDUCT.md
[hiding-a-comment]: https://help.github.com/articles/managing-disruptive-comments/#hiding-a-comment