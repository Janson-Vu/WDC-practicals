UPDATE Enrolments INNER JOIN Students
-- ON matches the column of 2 tables
ON Enrolments.student_id = Students.student_id

-- this updates the mark of Bob
SET Enrolments.mark = 50

-- WHERE filters out data from the table(s)
WHERE (Students.given_name = 'Bob') AND (Enrolments.subject_code = 'COMP SCI 1102');