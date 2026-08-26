pipeline {
    agent any

    stages {
        stage('Code Checkout') {
            steps {
                echo 'Successfully pulled frontend assets.'
            }
        }
        stage('Lint & Validate') {
            steps {
                echo 'Checking HTML, CSS, and JS files...'
                sh 'ls -la index.html style.css script.js'
            }
        }
        stage('Simulate Deploy') {
            steps {
                echo 'Frontend app is ready for deployment!'
            }
        }
    }
}
