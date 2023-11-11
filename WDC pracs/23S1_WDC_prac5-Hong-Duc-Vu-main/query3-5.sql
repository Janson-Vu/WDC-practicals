SELECT given_name, family_name, mark FROM Enrolments INNER JOIN Students
ON Students.student_id = Enrolments.student_id
where (Enrolments.subject_code='COMP SCI 2000') AND (Enrolments.mark < 50);