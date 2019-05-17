workflow "CI/CD" {
  on = "push"
  resolves = ["Backend - build", "Frontend - build"]
}

action "Backend - install dependencies" {
  uses = "baruchiro/github-actions@0.0.1"
  runs = "cd backend && dotnet restore"
}

action "Backend - build" {
  uses = "baruchiro/github-actions@0.0.1"
  runs = "cd backend && dotnet build"
  needs = ["Backend - install dependencies"]
}

action "Frontend - install dependencies" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  runs = "cd frontend && npm install"
}

action "Frontend - build" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  runs = "cd frontend && npm run build"
  needs = ["Frontend - install dependencies"]
}
