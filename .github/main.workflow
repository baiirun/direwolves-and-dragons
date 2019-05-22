workflow "CI/CD" {
  on = "push"
  resolves = ["Frontend - build"]
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
