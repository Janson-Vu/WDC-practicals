
-- SELECT Teachers.given_name, Teachers.family_name FROM Teachers INNER JOIN Subjects
-- ON Subjects.faculty = Teachers.faculty
-- WHERE Teachers.faculty = 'ECMS';

SELECT Teachers.staff_id, Teachers.given_name, Teachers.family_name

FROM (
    (Subjects INNER JOIN Teachers ON Subjects.teacher_id = Teachers.staff_id)
        INNER JOIN Enrolments ON Subjects.subject_code = Enrolments.subject_code
)

WHERE student_id = 'a1111113' AND Teachers.faculty = 'ECMS';
