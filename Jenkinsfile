pipeline {
  agent any

  options {
    disableConcurrentBuilds()
  }

  environment {
    REGISTRY = 'registry.3-form.com/make-a-pdf'
    DOCKER_IMAGE = ''
  }

  stages {
    stage('Build Image') {
      steps {
        echo 'Creating Production Image...'
        script {
          DOCKER_IMAGE = docker.build(REGISTRY + ":$GIT_COMMIT", ".")
        }
      }
    }

    stage('Push Image') {
      steps {
        echo 'Pushing Production Image...'
        script {
          DOCKER_IMAGE.push()
          DOCKER_IMAGE.push('latest')
        }
        sh "docker rmi $REGISTRY:$GIT_COMMIT"
      }
    }

    stage('Deploy') {
      steps {
        echo 'Starting deploy...'
        sh '''
          export DOCKER_HOST=ssh://webmaster@192.168.31.71

          docker stack deploy -c ./stack.yml make-a-pdf
        '''
      }
    }
  }

  post {
    always {
      cleanWs()
    }
  }
}
