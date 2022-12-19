namespace EnrollmentLibrary;

public class EnrolleeSorter
{
    public static List<Enrollee> Sort(List<Enrollee> enrollees)
    {
        return enrollees.OrderBy(e => e.Name).ToList();
    }
}
