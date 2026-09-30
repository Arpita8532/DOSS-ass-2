pipeline {
    agent any

    stages {

        stage('Code Checkout') {
            steps {
                echo 'Successfully pulled frontend assets.'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing npm dependencies...'
                sh 'npm install'
            }
        }

        stage('Lint & Validate') {
            steps {
                echo 'Checking HTML, CSS, and JS files...'
                sh 'ls -la index.html style.css script.js'
            }
        }

        stage('Run Automated Tests') {
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

    post {
        success {
            echo 'Pipeline completed successfully!'
        }

        failure {
            echo 'Pipeline failed!'
        }
    }
}
