using EnrollmentLibrary;

namespace EnrollmentTests;

public class EnrolleeSorterTests
{
    [Theory]
    [InlineData("Alice Andrews", "Aaron Bob", "Alice Andrews", "Aaron Bob")]
    [InlineData("Bob Carol", "Alice Bob", "Alice Bob", "Bob Carol")]
    [InlineData("James Oliver", "Oliver James", "Oliver James", "James Oliver")]
    public void FirstAndLastNameSortTest(string input1, string input2, string expected1, string expected2)
    {
        var enrollees = new List<Enrollee>
        {
            new Enrollee {
                FirstAndLastName = input1,
                InsuranceCompany = "Acme",
                UserId = "1",
                Version = 1 },
            new Enrollee {
                FirstAndLastName = input2,
                InsuranceCompany = "Acme",
                UserId = "2",
                Version = 1
            }
        };

        var sorted = EnrolleeSorter.Sort(enrollees);
        var actual1 = sorted[0].FirstAndLastName;
        var actual2 = sorted[1].FirstAndLastName;

        Assert.Equal(expected1, actual1);
        Assert.Equal(expected2, actual2);
    }
}
