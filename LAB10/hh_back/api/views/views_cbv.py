from rest_framework.views import APIView
from rest_framework.response import Response
from api.models import Company,Vacancy
from api.serializers import CompanySerializer,VacancySerializer

class CompanyListAPIView(APIView):
    def get(self, request):
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

class CompanyDetailAPIView(APIView):
    def get_object(self, company_id):
        try:
            return Company.objects.get(id=company_id)
        except Company.DoesNotExist as e:
            return Response(str(e))

    def get(self, request, company_id):
        instance = self.get_object(company_id)
        serializer = CompanySerializer(instance)
        return Response(serializer.data)

    def put(self, request, company_id):
        instance = self.get_object(company_id)
        serializer = CompanySerializer(instance=instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def delete(self, request, company_id):
        instance = self.get_object(company_id)
        instance.delete()
        return Response({'deleted': True})

class VacancyByCompany(APIView):
    def get(self,request ,company_id):
        try:
            companies=Vacancy.objects.all().filter(id=company_id)
            serializer=VacancySerializer(companies,many=True)
            
        except Vacancy.DoesNotExist as e:
            return Response({'exception': str(e)},status=400)
        return Response(serializer.data )

class VacancyListAPIView(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

class VacancyDetailAPIView(APIView):
    def get_object(self, vacancy_id):
        try:
            return Vacancy.objects.get(id=vacancy_id)
        except Vacancy.DoesNotExist as e:
            return Response(str(e))

    def get(self, request, vacancy_id):
        instance = self.get_object(vacancy_id)
        serializer = VacancySerializer(instance)
        return Response(serializer.data)

    def put(self, request, vacancy_id):
        instance = self.get_object(vacancy_id)
        serializer = VacancySerializer(instance=instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.error)

    def delete(self, request, vacancy_id):
        instance = self.get_object(vacancy_id)
        instance.delete()
        return Response({'deleted': True})

class TopTenVacanciesView(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all().order_by('-salary')[:10]
        serializer = VacancySerializer(vacancies, many = True)
        return Response(serializer.data)
    