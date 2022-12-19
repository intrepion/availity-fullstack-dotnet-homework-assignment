using EnrollmentLibrary;

namespace EnrollmentTests;

public class ConversionTests
{
    [Theory]
    [InlineData("Alice Andrews", "Aaron Bob", "Alice Andrews", "Aaron Bob")]
    [InlineData("Bob Carol", "Alice Bob", "Alice Bob", "Bob Carol")]
    [InlineData("James Oliver", "Oliver James", "Oliver James", "James Oliver")]
    public void FirstAndLastNameSortTest(string input1, string input2, string expected1, string expected2)
    {
        var enrollees = new List<Enrollee>
        {
            new Enrollee { Name = input1 },
            new Enrollee { Name = input2 }
        };

        var sorted = EnrolleeSorter.Sort(enrollees);

        Assert.Equal(expected1, sorted[0].Name);
        Assert.Equal(expected2, sorted[1].Name);
    }
}
