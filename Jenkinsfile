pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                echo 'Bulilding the code(Maven)'
            }
        }
        
        stage('Unit and Integration Tests') {
            steps {
                echo 'Running unit test to ensure code.'
                echo 'Running test for ensuring integration'
            }
        }
        
        stage('Code Analysis') {
            steps {
                echo 'Running and analysing the code using SonarQube'
            }
        }
        
        stage('Security Scan') {
            steps {
                echo 'Scannign security by OWASP ZAP...'
            }
        }
        
        stage('Deploy to Staging') {
            steps {
                echo 'Trying to deply the application'
            }
        }
        
        stage('Integration Tests on Staging') {
            steps {
                echo 'Running git integration tests'
            }
        }
        
        stage('Deploy to Production') {
            steps {
                echo 'Trying to deplay the application'
            }
        }
    }
    post {
        success {
            emailext subject: "Pipeline '${currentBuild.fullDisplayName}' Successful",
                      body: 'The building is successful',
                      to: 'akshay226718@gmail.com',
                      attachLog: true
        }
        failure {
            emailext subject: "Pipeline '${currentBuild.fullDisplayName}' Failed",
                      body: 'The building has been failed unfortunately, check it again',
                      to: 'akshay226718@gmail.com',
                      attachLog: true
        }
    }
}
