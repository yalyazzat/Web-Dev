def cigar_party(cigars, is_weekend):
  if(cigars >= 40 and cigars <= 60):
    return True
  elif(is_weekend and cigars >= 40):
    return True
  else:
    return False
