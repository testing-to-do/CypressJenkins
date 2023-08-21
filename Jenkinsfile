pipeline{

    agent any

    parameters{
        string(name: 'SPEC', defaultValue: "cypress/e2e", description: "Enter the script path for execution")
        choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: "Browser choice")
    }

    options{
        ansiColor('xterm')
    }

    stages{
        stage('Build'){
            echo 'Building the app'
        }
        stage('Testing'){
             steps{
                bat "npn i"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
             }
        }
        stage('Deploying'){
            echo 'Deploying...'
        }
    }

    post{
        always {
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/report', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
        }
    }
}