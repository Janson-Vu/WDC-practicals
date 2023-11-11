
SELECT Students.given_name, Students.family_name, Students.program, Subjects.subject, Subjects.faculty
FROM (
    (Subjects INNER JOIN Enrolments ON Subjects.subject_code = Enrolments.subject_code)
        INNER JOIN Students ON Students.student_id = Enrolments.student_id
)
WHERE Subjects.faculty != 'ECMS';