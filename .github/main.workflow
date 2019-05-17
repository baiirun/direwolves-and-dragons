workflow "CI/CD" {
  on = "push"
  resolves = ["Backend - build", "Frontend - build"]
}

action "Backend - install dependencies" {
  uses = "baruchiro/github-actions@0.0.1"
  args = "cd backend && dotnet restore"
}

action "Backend - build" {
  uses = "baruchiro/github-actions@0.0.1"
  needs = ["Backend - install dependencies"]
  args = "cd backend && dotnet build"
}

action "Frontend - install dependencies" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "cd frontend && npm install"
}

action "Frontend - build" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Frontend - install dependencies"]
  args = "cd frontend && npm run build"
}
