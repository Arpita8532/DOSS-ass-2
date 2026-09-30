pipeline {
    agent any

    stages {

        stage('Code Checkout') {
            steps {
                echo 'Checking out code from GitHub...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                echo 'Building the application...'
                echo 'Build completed successfully.'
            }
        }

        stage('Automated Testing') {
            steps {
                echo 'Running automated tests...'
                sh 'npm test'
            }
        }

        stage('Simulate Deploy') {
            steps {
                echo 'Frontend app is ready for deployment!'
            }
        }
    }
}