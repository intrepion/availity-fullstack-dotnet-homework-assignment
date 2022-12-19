using EnrollmentLibrary;

namespace EnrollmentTests;

public class EnrolleeSeparatorTests
{
    [Theory]
    [InlineData("Some Company", "1", "Another Company", "2", 2)]
    public void EnrolleeSeparatorTest(string company1, string id1, string company2, string id2, int expected)
    {
        var enrollees = new List<Enrollee>
        {
            new Enrollee { Company = company1, Id = id1, Name = "Alice Bob" },
            new Enrollee { Company = company2, Id = id2, Name = "Bob Alice" }
        };

        var reduced = EnrolleeSeparator.Separate(enrollees);
        var actual = reduced.Count;

        Assert.Equal(expected, actual);
    }
}
